import React, { useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';

const TaskModal = ({ visible, onCancel, onAdd, onEdit, task }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setTime(task.time);
    }
  }, [task]);

  const handleSave = () => {
    const newTask = { id: task ? task.id : Date.now(), title, time };
    if (task) {
      onEdit(newTask); // Update existing task
    } else {
      onAdd(newTask); // Add new task
    }
    onCancel();
  };

  return (
    <Modal
      title={task ? 'Edit Task' : 'Add New Task'}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{ marginTop: '10px' }}
      />
    </Modal>
  );
};

export default TaskModal;
