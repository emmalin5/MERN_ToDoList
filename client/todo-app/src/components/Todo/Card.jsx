import React, { useState } from 'react';
import {
  Card as AntdCard,
  Typography,
  Tag
} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const pastelColors = ['#d0e7ff', '#e6f4ff', '#a8d3ff']; // Background colors

const Card = ({
  title,
  time,
  status: initialStatus = 'pending',
  onComplete,
  colorIndex = 0,
  onClick,
}) => {
  const [status, setStatus] = useState(initialStatus);
  const isCompleted = status === 'completed';

  const toggleComplete = (e) => {
    e.stopPropagation();
    const newStatus = isCompleted ? 'pending' : 'completed';
    setStatus(newStatus);
    onComplete?.(newStatus);
  };

  const backgroundColor = isCompleted
    ? '#fff'
    : pastelColors[colorIndex % pastelColors.length];
  const textColor = isCompleted ? '#aaa' : '#222';

  return (
    <AntdCard
      style={{
        marginTop: 20,
        backgroundColor,
        border: '1px solid #e0e0e0',
        borderRadius: 16,
        boxShadow: isCompleted ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
      }}
      bodyStyle={{ padding: 20 }}
      hoverable
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Side: Circle + Title/Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            cursor: 'pointer'
          }}
          onClick={toggleComplete}
        >
          {/* Status Circle */}
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              border: isCompleted ? 'none' : '2px solid #1890ff',
              backgroundColor: isCompleted ? '#ff4d4f' : 'transparent',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease',
            }}
          />

          <div>
            <Text
              strong
              style={{
                fontSize: 18,
                color: textColor,
                textDecoration: isCompleted ? 'line-through' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {title}
            </Text>

            <Paragraph
              type="secondary"
              style={{
                margin: 0,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: isCompleted ? '#aaa' : '#444',
                textDecoration: isCompleted ? 'line-through' : 'none',
              }}
            >
              <ClockCircleOutlined /> {time || 'No time'}
            </Paragraph>
          </div>
        </div>

        {/* Right Side: Tag */}
        <Tag
          color={isCompleted ? 'red' : 'blue'}
          style={{
            fontWeight: 600,
            fontSize: 13,
            borderRadius: 20,
            padding: '2px 10px',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {isCompleted ? 'Completed' : 'Pending'}
        </Tag>
      </div>
    </AntdCard>
  );
};

export default Card;
