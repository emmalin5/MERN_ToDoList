import React, { useState } from 'react'
import { Card as AntdCard, Typography, Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const { Text, Paragraph } = Typography

const pastelColors = ['#d0e7ff', '#e6f4ff', '#a8d3ff'] // matches blue-200, 100, 300

const Card = ({
  title,
  time,
  status: initialStatus = 'pending',
  onComplete,
  colorIndex = 0,
  onClick, // accept onClick
}) => {
  const [status, setStatus] = useState(initialStatus)
  const isCompleted = status === 'completed'

  const toggleComplete = (e) => {
    e.stopPropagation() // prevent parent click from firing
    const newStatus = isCompleted ? 'pending' : 'completed'
    setStatus(newStatus)
    onComplete?.(newStatus)
  }

  const backgroundColor = isCompleted ? '#fff' : pastelColors[colorIndex % pastelColors.length]
  const textColor = isCompleted ? '#999' : '#000'

  return (
    <AntdCard
      style={{
        marginTop: 20,
        backgroundColor,
        borderColor: '#d9d9d9',
        borderRadius: 12,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        padding: 1,
      }}
      
      onClick={onClick} // attach click handler here
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button
          shape="circle"
          size="small"
          onClick={toggleComplete}
          icon={isCompleted ? <CheckOutlined /> : null}
          style={{
            borderColor: '#1890ff',
            backgroundColor: '#fff',
            color: isCompleted ? '#1890ff' : '#000',
            width: 24,
            height: 24,
            fontSize: 12,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <Text
          strong
          style={{
            fontSize: 20,
            color: textColor,
            textDecoration: isCompleted ? 'line-through' : 'none',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </Text>
      </div>

      <Paragraph
        style={{
          marginTop: 8,
          fontSize: 12,
          color: 'Black',
          textDecoration: isCompleted ? 'line-through' : 'none',
        }}
      >
        {time}
      </Paragraph>
    </AntdCard>
  )
}

export default Card
