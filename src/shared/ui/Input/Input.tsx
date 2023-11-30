import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from  './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const iscaretVisible = isFocused && !readonly;

    useEffect(()=>{
        if(autofocus){
            setIsFocused(true);
            ref.current?.focus();
        }
    },[autofocus]);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlure = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && 
                <div className={cls.placeholder}>
                    {placeholder + '>'}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input 
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlure}
                    onSelect={onSelect}
                    readOnly={readonly}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...otherProps}
                />
                {iscaretVisible && <span 
                    className={cls.caret}
                    style={{left:`${caretPosition * 7.1}px`}}
                />}
            </div>
        </div>
    );
});