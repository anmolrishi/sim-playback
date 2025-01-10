import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Stack,
  Container,
  Typography,
  TextField,
  IconButton,
  Paper,
  Grid,
  Chip,
  Select,
  MenuItem,
  Pagination
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../../layout/Layout';
import DashboardContent from '../DashboardContent';

interface Module {
  name: string;
  sims: number;
  id: string;
  assignment: string;
  score: string;
  dueDate: string;
  status: 'Ongoing' | 'Not Started' | 'Finished';
}

const modules: Module[] = [
  {
    name: "Module_name_01",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "86%",
    dueDate: "25 Dec 2024",
    status: "Ongoing"
  },
  {
    name: "Module_name_02",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "NA",
    dueDate: "25 Dec 2024",
    status: "Not Started"
  },
  {
    name: "Module_name_03",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "56%",
    dueDate: "25 Dec 2024",
    status: "Ongoing"
  },
  {
    name: "Module_name_04",
    sims: 3,
    id: "45789",
    assignment: "New Assignment",
    score: "86%",
    dueDate: "25 Dec 2024",
    status: "Finished"
  }
];

const TrainingPlanDetailsPage = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState('50');

  const getStatusColor = (status: Module['status']) => {
    switch (status) {
      case 'Ongoing':
        return { bg: 'primary.50', color: 'primary.main' };
      case 'Finished':
        return { bg: 'success.50', color: 'success.main' };
      default:
        return { bg: 'warning.50', color: 'warning.main' };
    }
  };

  const filteredModules = modules.filter(module =>
    module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.assignment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <DashboardContent>
        <Container>
          <Stack spacing={4} sx={{ py: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Link 
                to="/training" 
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="h4" color="text.secondary">
                  Training Plan
                </Typography>
              </Link>
              <Typography variant="h4" color="text.secondary">/</Typography>
              <Typography variant="h4">Training_plan_name 01</Typography>
            </Stack>

            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <TextField
                  placeholder="Search"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{ maxWidth: 300 }}
                />
                <Stack direction="row" spacing={1}>
                  <IconButton>
                    <FilterListIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                  <IconButton>
                    <SortIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Stack>
              </Stack>

              <Paper variant="outlined">
                <Grid container sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" color="text.secondary">Module</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="subtitle2" color="text.secondary">No. of Sims</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2" color="text.secondary">ID No.</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2" color="text.secondary">Assignment</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="subtitle2" color="text.secondary">Score</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2" color="text.secondary">Due Date</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                  </Grid>
                </Grid>

                {filteredModules.map((module, index) => (
                  <Grid
                    key={index}
                    container
                    sx={{
                      p: 2,
                      borderBottom: 1,
                      borderColor: 'divider',
                      '&:hover': {
                        bgcolor: 'action.hover',
                      }
                    }}
                    alignItems="center"
                  >
                    <Grid item xs={3}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <ExpandMoreIcon sx={{ fontSize: 20 }} />
                        <Typography>{module.name}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>{module.sims} Sims</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{module.id}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{module.assignment}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography
                        color={
                          module.score === "NA" ? "text.secondary" :
                          parseInt(module.score) >= 80 ? "success.main" :
                          parseInt(module.score) >= 60 ? "warning.main" :
                          "error.main"
                        }
                      >
                        {module.score}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{module.dueDate}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Chip
                        label={module.status}
                        size="small"
                        sx={{
                          bgcolor: getStatusColor(module.status).bg,
                          color: getStatusColor(module.status).color,
                        }}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Paper>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    Rows per page:
                  </Typography>
                  <Select
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(e.target.value)}
                    size="small"
                    sx={{ minWidth: 80 }}
                  >
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                    <MenuItem value="50">50</MenuItem>
                    <MenuItem value="100">100</MenuItem>
                  </Select>
                </Stack>
                <Pagination
                  count={10}
                  shape="rounded"
                  size="small"
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </DashboardContent>
    </Layout>
  );
};

export default TrainingPlanDetailsPage;