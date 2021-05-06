import {Answer} from './answer';

export interface ForumQuestion {
  id: number;
  questionTitle: string;
  numberOfAnswers: number;
  likes: number;
  date: string;
  forumAnswer: Answer[];
}
