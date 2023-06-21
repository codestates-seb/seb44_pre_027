import React, { useCallback, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');

    const bind = {
        value,
        onChange : useCallback((e:React.ChangeEvent):void => {
            const { value }:any = e.target;
            setValue(value)
        }, [])
    }

    return bind;
}

export default useInput;