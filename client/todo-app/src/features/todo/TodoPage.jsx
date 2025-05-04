import React from 'react';
import { Layout, Typography, Row, Col, Calendar } from 'antd';
import dayjs from 'dayjs';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TodoList from '../../components/Todo/TodoList';

const { Content } = Layout;
const { Text } = Typography;

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

function TodoPage() {
  const today = dayjs();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

      <Content
        style={{
          padding: '24px',
          maxWidth: 1200,
          margin: '0 auto',
          flex: 1,
          width: '100%',
        }}
      >
        <Row gutter={[24, 24]}>
          {/* Left Column: To-do List */}
          <Col xs={24} md={16}>
            <Text type="secondary" style={{ fontSize: 16, fontWeight: 500 }}>
              {today.format('ddd D MMM')} {/* e.g., Sat 3 May */}
            </Text>
            <TodoList />
          </Col>

          {/* Right Column: Calendar */}
          <Col xs={24} md={8}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </Col>
        </Row>
      </Content>

      <Footer />
    </Layout>
  );
}

export default TodoPage;
