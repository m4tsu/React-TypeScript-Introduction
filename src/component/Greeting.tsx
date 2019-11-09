import React, { FC } from 'react';

interface GreetingProps {
  name: string;
  time: number;
}

const Greeting: FC<GreetingProps> = (props: GreetingProps) => {
  const { name, time } = props

  const greet = (yourName: string, currentTime: number): string => {
    return `${yourName}さんこんにちは。今は${currentTime}時です`
  }

  return (
    <>
      <p>
        { greet(name, time) }
      </p>
    </>
  )
}

export default Greeting;