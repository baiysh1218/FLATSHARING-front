import React, { FC, useEffect, useState } from "react";
import clsx from "./index.module.css";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

interface Props {
  handlegetRooms: (data: number) => void;
}

const Rooms: FC<Props> = ({ handlegetRooms }) => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    handlegetRooms(count);
  }, [count]);
  return (
    <div className={clsx.romms_wrapper}>
      <Button $border onClick={handleDecrement}>
        -
      </Button>
      <Input readOnly value={count > 0 ? `${count} rooms` : "Studio"} />
      <Button $border onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Rooms;
