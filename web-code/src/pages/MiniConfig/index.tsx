import { upload_file_api_banner_pc_upload_post } from '@/request-apis/customUpload';
import {
  delete_file_api_wechatbanner_pc__delete,
  get_banners_api_wechatbanner_pc__get,
} from '@/request-apis/sneaker-service/Banner';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Card, Image, Upload } from 'antd';
import React, { useEffect, useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const MiniConfig: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useEffect(() => {
    get_banners_api_wechatbanner_pc__get().then((res) => {
      // @ts-ignore
      if (res.code === 1) {
        const result: UploadFile[] =
          res.data?.map((item: any) => {
            return {
              uid: item.id,
              name: 'image.png',
              status: 'done',
              url: item.url,
            };
          }) || [];
        setFileList(result);
      }
    });
  }, []);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Card title="首页图片配置">
      <Upload
        action="*"
        accept=".png,.jpg,.jpeg"
        onRemove={(file) => {
          return new Promise((resolve) => {
            delete_file_api_wechatbanner_pc__delete({
              params: {
                file_id: file?.response?.id ?? Number(file.uid),
              },
            })
              .then((res) => {
                // @ts-ignore
                if (res.code === 1) {
                  resolve(true);
                } else {
                  resolve(false);
                }
              })
              .catch(() => {
                resolve(false);
              });
          });
        }}
        customRequest={(options) => {
          const data = new FormData();
          data.append('file', options.file);
          upload_file_api_banner_pc_upload_post(data, {
            onUploadProgress(progressEvent: any) {
              const percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              options.onProgress?.({ percent });
            },
          })
            .then((res) => {
              // @ts-ignore
              if (res.code === 1) {
                const { url, file_id } = res.data as any;
                options.onSuccess?.({ url, id: file_id });
              }
              console.log(res);
            })
            .catch((err) => {
              options.onError?.(err);
            });
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        <button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </Card>
  );
};

export default MiniConfig;
