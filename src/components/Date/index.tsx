import { formatDate } from '../../utils/formatDate';
import * as Styled from './styles';

export type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <Styled.Date>{formatDate(date)}</Styled.Date>;
};

export default Date;
