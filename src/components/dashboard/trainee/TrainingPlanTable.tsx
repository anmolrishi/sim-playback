import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Grid,
  Paper,
  TextField,
  Typography,
  Chip,
  Select,
  MenuItem,
  Pagination,
  Box,
  styled
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

interface TrainingPlan {
  id: string;
  name: string;
  modules: string;
  modulesCount: number;
  time: string;
  timeInMinutes: number;
  score: string | null;
  scoreValue: number | null;
  dueDate: string;
  dueDateTimestamp: number;
  status: 'Ongoing' | 'Not Started' | 'Finished';
  progress: number;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none'
}));

const HeaderChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  height: 24,
  fontSize: '0.75rem'
}));

const SortableHeader = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    '& .MuiSvgIcon-root': {
      opacity: 1
    }
  }
}));

const TrainingPlanTable = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState('50');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState<keyof TrainingPlan | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const plans: TrainingPlan[] = [
    {
      id: "45789",
      name: "New Training Plan 01",
      modules: "4 Modules | 12 Sims",
      modulesCount: 4,
      time: "1h 30m",
      timeInMinutes: 90,
      score: "86%",
      scoreValue: 86,
      dueDate: "25 Dec 2024",
      dueDateTimestamp: new Date('2024-12-25').getTime(),
      status: "Ongoing",
      progress: 92
    },
    {
      id: "45790",
      name: "New Training Plan 02",
      modules: "4 Modules | 12 Sims",
      modulesCount: 4,
      time: "1h 30m",
      timeInMinutes: 90,
      score: null,
      scoreValue: null,
      dueDate: "25 Jan 2025",
      dueDateTimestamp: new Date('2024-12-25').getTime(),
      status: "Not Started",
      progress: 0
    },
    {
      id: "45791",
      name: "New Training Plan 03",
      modules: "4 Modules | 12 Sims",
      modulesCount: 4,
      time: "1h 30m",
      timeInMinutes: 90,
      score: "56%",
      scoreValue: 56,
      dueDate: "25 Dec 2024",
      dueDateTimestamp: new Date('2024-12-25').getTime(),
      status: "Ongoing",
      progress: 10
    },
    {
      id: "45792",
      name: "New Training Plan 04",
      modules: "4 Modules | 12 Sims",
      modulesCount: 4,
      time: "1h 30m",
      timeInMinutes: 90,
      score: "86%",
      scoreValue: 86,
      dueDate: "25 Dec 2024",
      dueDateTimestamp: new Date('2024-12-25').getTime(),
      status: "Finished",
      progress: 100
    }
  ];

  const timeFilterOptions = {
  all: 'All Time',
  '7days': 'Next 7 Days',
  '30days': 'Next 30 Days'
  };

  const statusFilterOptions = {
    all: 'All Status',
    'Not Started': 'Not Started',
    'Ongoing': 'Ongoing',
    'Finished': 'Finished'
  };
  
  const handleSort = (field: keyof TrainingPlan) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusColor = (status: TrainingPlan['status']) => {
    switch (status) {
      case 'Ongoing':
        return { bg: '#EEF4FF', color: '#3538CD' };
      case 'Finished':
        return { bg: '#ECFDF3', color: '#027A48' };
      default:
        return { bg: '#FFFAEB', color: '#B54708' };
    }
  };

  const filteredAndSortedPlans = useMemo(() => {
    let filtered = [...plans];

    if (searchQuery) {
      filtered = filtered.filter(plan => 
        plan.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (timeFilter !== 'all') {
      const now = new Date().getTime();
      const days = timeFilter === '7days' ? 7 : 30;
      filtered = filtered.filter(plan => 
        plan.dueDateTimestamp - now <= days * 24 * 60 * 60 * 1000
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(plan => plan.status === statusFilter);
    }

    if (sortField) {
      filtered.sort((a, b) => {
        let comparison = 0;
        switch (sortField) {
          case 'modulesCount':
            comparison = a.modulesCount - b.modulesCount;
            break;
          case 'timeInMinutes':
            comparison = a.timeInMinutes - b.timeInMinutes;
            break;
          case 'scoreValue':
            if (a.scoreValue === null) return 1;
            if (b.scoreValue === null) return -1;
            comparison = a.scoreValue - b.scoreValue;
            break;
          case 'dueDateTimestamp':
            comparison = a.dueDateTimestamp - b.dueDateTimestamp;
            break;
          case 'status':
            comparison = a.status.localeCompare(b.status);
            break;
          default:
            return 0;
        }
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }, [plans, searchQuery, timeFilter, statusFilter, sortField, sortDirection]);

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5" fontWeight="600">Training Plan</Typography>
          <HeaderChip label="32 Simulations" size="small" />
        </Stack>
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: '#F9FAFB',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextField
          placeholder="Search"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 240 }}
        />
        <Stack direction="row" spacing={2}>
          <Select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            size="small"
            sx={{
              minWidth: 120,
              bgcolor: 'background.paper',
              '& .MuiSelect-select': {
                py: 1.5,
                color: 'text.primary',
                fontWeight: 500
              }
            }}
          >
            {Object.entries(timeFilterOptions).map(([value, label]) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </Select>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            size="small"
            sx={{
              minWidth: 120,
              bgcolor: 'background.paper',
              '& .MuiSelect-select': {
                py: 1.5,
                color: 'text.primary',
                fontWeight: 500
              }
            }}
          >
            {Object.entries(statusFilterOptions).map(([value, label]) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </Select>
        </Stack>
      </Paper>

      <StyledPaper>
        <Grid container sx={{ p: 2, bgcolor: 'grey.50' }}>
          <Grid item xs={1.5}>
            <Typography variant="subtitle2" color="text.secondary">ID No.</Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography variant="subtitle2" color="text.secondary">Training Plan</Typography>
          </Grid>
          <Grid item xs={2}>
            <SortableHeader 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              onClick={() => handleSort('modulesCount')}
            >
              <Typography variant="subtitle2" color="text.secondary">No. of Modules</Typography>
              <UnfoldMoreIcon sx={{ fontSize: 16, opacity: sortField === 'modulesCount' ? 1 : 0.3 }} />
            </SortableHeader>
          </Grid>
          <Grid item xs={1.5}>
            <SortableHeader 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              onClick={() => handleSort('timeInMinutes')}
            >
              <Typography variant="subtitle2" color="text.secondary">Est. Time</Typography>
              <UnfoldMoreIcon sx={{ fontSize: 16, opacity: sortField === 'timeInMinutes' ? 1 : 0.3 }} />
            </SortableHeader>
          </Grid>
          <Grid item xs={1.5}>
            <SortableHeader 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              onClick={() => handleSort('scoreValue')}
            >
              <Typography variant="subtitle2" color="text.secondary">Score</Typography>
              <UnfoldMoreIcon sx={{ fontSize: 16, opacity: sortField === 'scoreValue' ? 1 : 0.3 }} />
            </SortableHeader>
          </Grid>
          <Grid item xs={1.5}>
            <SortableHeader 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              onClick={() => handleSort('dueDateTimestamp')}
            >
              <Typography variant="subtitle2" color="text.secondary">Due Date</Typography>
              <UnfoldMoreIcon sx={{ fontSize: 16, opacity: sortField === 'dueDateTimestamp' ? 1 : 0.3 }} />
            </SortableHeader>
          </Grid>
          <Grid item xs={1.5}>
            <SortableHeader 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              onClick={() => handleSort('status')}
            >
              <Typography variant="subtitle2" color="text.secondary">Status</Typography>
              <UnfoldMoreIcon sx={{ fontSize: 16, opacity: sortField === 'status' ? 1 : 0.3 }} />
            </SortableHeader>
          </Grid>
        </Grid>

        {filteredAndSortedPlans.map((plan) => (
          <Grid
            key={plan.id}
            container
            sx={{
              p: 2,
              borderTop: 1,
              borderColor: 'divider',
              '&:hover': { 
                bgcolor: 'action.hover',
                cursor: 'pointer'
              }
            }}
            onClick={() => navigate(`/training/${plan.id}`)}
          >
            <Grid item xs={1.5}>
              <Typography variant="body2">{plan.id}</Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Stack spacing={0.5}>
                <Typography variant="body2" fontWeight="500">
                  {plan.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {plan.progress}% completed
                </Typography>
                <Box sx={{ 
                  height: 2, 
                  width: '100%', 
                  bgcolor: 'primary.50',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    height: '100%', 
                    width: `${plan.progress}%`, 
                    bgcolor: 'primary.main' 
                  }} />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{plan.modules}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="body2">{plan.time}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                variant="body2"
                sx={{
                  color: plan.score === null ? 'text.secondary' :
                    parseInt(plan.score) >= 80 ? 'success.main' :
                    parseInt(plan.score) >= 60 ? 'warning.main' :
                    'error.main'
                }}
              >
                {plan.score ?? 'NA'}
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="body2">{plan.dueDate}</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Chip
                label={plan.status}
                size="small"
                sx={{
                  bgcolor: getStatusColor(plan.status).bg,
                  color: getStatusColor(plan.status).color,
                  fontWeight: 500,
                  fontSize: '0.75rem'
                }}
              />
            </Grid>
          </Grid>
        ))}
      </StyledPaper>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Rows per page:
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
            size="small"
            sx={{ minWidth: 70 }}
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="50">50</MenuItem>
            <MenuItem value="100">100</MenuItem>
          </Select>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            1-50 of 110
          </Typography>
          <Pagination 
            count={3} 
            shape="rounded" 
            size="small"
            sx={{
              '& .MuiPaginationItem-root': {
                border: 1,
                borderColor: 'divider'
              }
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrainingPlanTable;