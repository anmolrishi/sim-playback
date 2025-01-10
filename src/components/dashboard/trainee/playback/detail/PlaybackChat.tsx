import React from 'react';
import { Stack, Avatar, Paper, Typography, Box } from '@mui/material';

interface Message {
  type: 'agent' | 'customer';
  text: string;
  scores?: {
    keywordScore: string;
    symAccuracy: string;
  };
}

const messages: Message[] = [
  {
    type: 'agent',
    text: "Thank you for calling Centerwell Pharmacy. My name is [Your Name]. Are you ready to take advantage of your Mail Order Benefits today?",
    scores: {
      keywordScore: "1/2",
      symAccuracy: "68%"
    }
  },
  {
    type: 'customer',
    text: "Hello! I want to refill my medications please."
  },
  {
    type: 'agent',
    text: "Thank you for calling Centerwell Pharmacy. My name is [Your Name]. Are you ready to take advantage of your Mail Order Benefits today?",
    scores: {
      keywordScore: "1/2",
      symAccuracy: "68%"
    }
  },
  {
    type: 'customer',
    text: "Hello! I want to refill my medications please."
  }
];

const PlaybackChat = () => {
  return (
    <Stack spacing={2}>
      {messages.map((message, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={1}
          justifyContent={message.type === 'customer' ? 'flex-end' : 'flex-start'}
        >
          {message.type === 'agent' && (
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          )}
          <Paper
            sx={{
              maxWidth: '80%',
              p: 2,
              bgcolor: message.type === 'agent' ? 'primary.main' : 'grey.100',
              color: message.type === 'agent' ? 'white' : 'text.primary',
              borderRadius: 2
            }}
          >
            <Typography>{message.text}</Typography>
            {message.scores && (
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 10,
                      bgcolor: 'primary.dark',
                      color: 'white',
                      fontSize: '0.75rem'
                    }}
                  >
                    {message.scores.keywordScore}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: 'primary.lighter' }}
                  >
                    Keyword Score
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 10,
                      bgcolor: 'primary.dark',
                      color: 'white',
                      fontSize: '0.75rem'
                    }}
                  >
                    {message.scores.symAccuracy}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: 'primary.lighter' }}
                  >
                    Sym Accuracy
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Paper>
        </Stack>
      ))}
    </Stack>
  );
};

export default PlaybackChat;