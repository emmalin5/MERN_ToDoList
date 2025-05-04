import React, { useEffect, useState } from "react";
import { Modal, Input, DatePicker, TimePicker, Button, Space } from "antd";
import { BellOutlined, RedoOutlined } from "@ant-design/icons";
import moment from "moment";
const { TextArea } = Input;

const TaskModal = ({ isOpen, onClose, onSave, onDelete, task }) => {
  const isEditMode = !!task;

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [status, setStatus] = useState(false);
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    if (isEditMode && task) {
      setTaskName(task.title || "");
      setTaskDescription(task.description || "");
      setDate(task.date ? moment(task.date) : null); // Convert to moment
      setStartTime(task.startTime ? moment(task.startTime, "HH:mm") : null);
      setEndTime(task.endTime ? moment(task.endTime, "HH:mm") : null);
      setRepeat(task.repeat || false);
      setStatus(task.status || "pending"); // Use string enum values
      setReminder(task.reminder || false);
    } else {
      // Reset form
      setTaskName("");
      setTaskDescription("");
      setDate(null);
      setStartTime(null);
      setEndTime(null);
      setRepeat(false);
      setStatus("pending");
      setReminder(false);
    }
  }, [task, isOpen]);

  const handleSave = () => {
    const taskData = {
      title: taskName,
      description: taskDescription,
      date: date ? date.toISOString() : null,
      startTime: startTime ? startTime.format("HH:mm") : null,
      endTime: endTime ? endTime.format("HH:mm") : null,
      repeat,
      status,
      reminder,
    };

    onSave(taskData, task?.index);
    onClose();
  };

  const handleDelete = () => {
    if (isEditMode && onDelete) {
      alert("Are you sure you want to delete this task?");
      onDelete(task.index);
      onClose();
    }
  };

  return (
    <Modal
      title={isEditMode ? "Update Task" : "Create Task"}
      open={isOpen}
      onCancel={onClose}
      footer={null}>
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <TextArea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task description"
          rows={4}
        />
        <Space wrap size="middle">
          <DatePicker
            popupClassName="!z-[9999]"
            value={date}
            onChange={(value) => setDate(value)}
          />
          <TimePicker
            placeholder="Start Time"
            value={startTime}
            onChange={(value) => setStartTime(value)}
          />
          <TimePicker
            placeholder="End Time"
            value={endTime}
            onChange={(value) => setEndTime(value)}
          />
        </Space>
        <Space wrap size="middle">
          <Button
            type={reminder ? "primary" : "default"}
            style={{
              backgroundColor: reminder ? "#1890ff" : undefined,
              color: reminder ? "#fff" : undefined,
            }}
            icon={<BellOutlined />}
            onClick={() => setReminder((prev) => !prev)}>
            Reminder
          </Button>
          <Button
            type={repeat ? "primary" : "default"}
            style={{
              backgroundColor: repeat ? "#1890ff" : undefined,
              color: repeat ? "#fff" : undefined,
            }}
            icon={<RedoOutlined />}
            onClick={() => setRepeat((prev) => !prev)}>
            Repeat
          </Button>
        </Space>

        <Space style={{ justifyContent: "right", width: "100%" }}>
          {isEditMode && (
            <Button
              type="primary"
              style={{ paddingInline: "30px" }}
              danger
              onClick={handleDelete}>
              Delete
            </Button>
          )}
          <Button type="primary" onClick={handleSave}>
            {isEditMode ? "Save Changes" : "Create Task"}
          </Button>
        </Space>
      </Space>
    </Modal>
  );
};

export default TaskModal;
