import React, { useState } from 'react'
import { Layout, Menu, Button, Avatar, Dropdown } from 'antd'
import {
  BellOutlined,
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import TaskModal from '../Todo/TodoModal'

const { Header } = Layout

const AppHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Your Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Sign out
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>
          SpecialTask
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add New Task
          </Button>

          <BellOutlined style={{ fontSize: '18px' }} />

          <Dropdown menu={{ items: userMenu }} placement="bottomRight">
            <Avatar
              style={{ backgroundColor: '#1890ff', cursor: 'pointer' }}
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </Dropdown>
        </div>
      </Header>

      <TaskModal isOpen={isModalOpen} onClose={handleCancel} />
    </>
  )
}

export default AppHeader
