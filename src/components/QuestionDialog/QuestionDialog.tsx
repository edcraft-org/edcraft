import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import QuestionGroupPage from '../../pages/QuestionPages/QuestionGroupPage/QuestionGroupPage';

interface Question {
  title: string;
  description: string;
}

interface QuestionDialogProps {
  open: boolean;
  onClose: () => void;
  question: Question | null;
}

const QuestionDialog: React.FC<QuestionDialogProps> = ({ open, onClose, question }) => {
  if (!question) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{question.title}</DialogTitle>
      <DialogContent dividers>
        {/* <QuestionGroupPage projectId="1" questionGroupId="1" questionTitle={question.title} /> */}
        <QuestionGroupPage questionTitle={question.title} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionDialog;