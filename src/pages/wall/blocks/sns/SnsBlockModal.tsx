import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import { useWallStore } from '@/store';
import { SnsType } from '@/types/blocks';

interface SnsBlockModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SnsBlockModal({
  isModalOpen,
  setIsModalOpen,
}: SnsBlockModalProps) {
  const { wall, setWall } = useWallStore();

  const onFinish = (values: { snsTitle: string; snsUrl: string }) => {
    setWall({
      ...wall,
      snsBlock: [
        ...(wall.snsBlock as SnsType[]),
        {
          id: (wall.snsBlock as SnsType[]).length + 1,
          snsTitle: values.snsTitle,
          snsUrl: values.snsUrl,
        },
      ],
    });
    setIsModalOpen(false);
  };
  return (
    <Modal footer={null} centered title="SNS 추가" open={isModalOpen}>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 30 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<SnsType>
          label="snsTitle"
          name="snsTitle"
          rules={[{ required: true, message: 'sns를 선택해세오' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<SnsType>
          label="snsUrl"
          name="snsUrl"
          rules={[{ required: true, message: '주소를 입력해주세요' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit" className="mr-2">
            Submit
          </Button>
          <Button danger onClick={() => setIsModalOpen(false)}>
            cacel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
