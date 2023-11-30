import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from  './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';


export interface SelectOptions{
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void
    readonly?: boolean,

}

export const Select = memo(({className, label, options, value, onChange, readonly}: SelectProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            );
        });
    }, [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && 
                <span className={cls.label}>
                    {label + '>'}
                </span>
            }
            <select
                disabled={readonly} 
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});