import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";

const taskStatuses = ["open", "pending", "inprog", "complete"];

function Todo() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({ title: "", status: "open" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", status: "open" });
    setIsModalOpen(false);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTask.index
        ? { title: currentTask.title, status: currentTask.status }
        : task
    );
    setTasks(updatedTasks);
    setIsModalOpen(false);
  };

  const openModal = (task = null, index = null) => {
    if (task) {
      setCurrentTask({ ...task, index });
    } else {
      setCurrentTask(null);
    }
    setIsModalOpen(true);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography className="text-center" variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <Button variant="contained" onClick={() => openModal()}>
        Add Task
      </Button>
      {taskStatuses.map((status) => (
        <Box key={status} sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom className="flex justify-center">
          <TextField
          id="outlined-read-only-input"
          label={"Tasks"}
          defaultValue={status.charAt(0).toUpperCase() + status.slice(1)}
          InputProps={{
            readOnly: true,
          }}
        />
        {/* <p className="text-black font-sans text-center  border-b border-black w-[300px] py-2 px-3">{status.charAt(0).toUpperCase() + status.slice(1)} Tasks</p> */}
          </Typography>
          <Grid container spacing={2}>
            {getTasksByStatus(status).map((task, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="border">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {task.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() =>
                        openModal(
                          task,
                          tasks.findIndex((t) => t === task)
                        )
                      }
                      variant="outlined"
                      endIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={() =>
                        deleteTask(tasks.findIndex((t) => t === task))
                      }
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>{currentTask ? "Edit Task" : "Add Task"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            value={currentTask ? currentTask.title : newTask.title}
            onChange={(e) =>
              currentTask
                ? setCurrentTask({ ...currentTask, title: e.target.value })
                : setNewTask({ ...newTask, title: e.target.value })
            }
          />

<TextField
            select
            margin="dense"
            label="Status"
            fullWidth
            value={currentTask ? currentTask.status : newTask.status}
            onChange={(e) =>
              currentTask
                ? setCurrentTask({ ...currentTask, status: e.target.value })
                : setNewTask({ ...newTask, status: e.target.value })
            }
          >
            {taskStatuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button onClick={currentTask ? updateTask : addTask}>
            {currentTask ? "Update Task" : "Add Task"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Todo;
