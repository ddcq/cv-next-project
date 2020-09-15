import React, { ReactElement, FunctionComponent } from 'react';
import {
  FontIcon,
} from 'react-md';

type SkillRateProps = {
  rate: number,
};

const ICON_ARRAY: Array<string> = [
  "mood_bad",
  "sentiment_very_dissatisfied",
  "sentiment_neutral",
  "sentiment_satisfied_alt",
  "sentiment_very_satisfied",
];
const SkillRate: FunctionComponent<SkillRateProps> = ({ rate }) => (
  <>
    {ICON_ARRAY.map((iconName, idx)  => <FontIcon color={rate > idx ? "red" : "blue"} >{iconName}</FontIcon>)}
  </>
);


export default function skills(): ReactElement {
  return (
    <div>
      Mathématique <SkillRate rate={3} /><br/>
      Français <SkillRate rate={3} />
    </div >
  )
}
