import { ExclamationCircleOutlined } from '@ant-design/icons';
import {  Modal, Button, Space } from 'antd';

const DeletePrincipio: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      okText: 'OK',
      cancelText: 'Cancel',
    });
  };

return (
  <>
    <Space>
      <Button onClick={confirm}>Confirm</Button>
    </Space>
    {contextHolder}
  </>
);
};

export default DeletePrincipio;