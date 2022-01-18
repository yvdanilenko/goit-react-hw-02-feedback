import Controls from '../FeedbackButton/Buttons';
import { FeedbackList, FeedbackListItem } from './FeedbackList.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackListItem key={option}>
          <Controls name={option} controlClick={onLeaveFeedback}></Controls>
        </FeedbackListItem>
      ))}
    </FeedbackList>
  );
};

export default FeedbackOptions;
