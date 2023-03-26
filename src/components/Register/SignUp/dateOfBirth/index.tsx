import React, { useState } from 'react';

const DateOfBirth = () => {
    const days = [...Array(31).keys()].map(day => (day + 1).toString());
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const years = [...Array(100).keys()].map(year => year + 1920);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    

    const handleSet = (item: string, name: string) => {
        console.log(name);
        switch (name) {
            case 'day':
                setDay(item);
                console.log(item);
                break;
            case 'month':
                setMonth(item);
                console.log(item);
                break;
            case 'year':
                setYear(item);
                console.log(item);
                break;
            default:
                break;
        }
    };

    const options = (arr: number[] | string[], name: string) =>
        arr.map(item => (
            <option
                key={item}
                value={item}
            >
                {item}
            </option>
        ));

    const selectDays = options(days, 'day');
    const selectMonths = options(months, 'month');
    const selectYears = options(years, 'year');

    return (
        <div className="flex justify-around">
            <div className="border border-gray-200  text-gray-500 text-xl w-[80px] h-[40px] p-2 ">
                <select
                    name="DD"
                    value={day}
                    onChange={e => handleSet(e.target.value, 'day')}
                >
                    {selectDays}
                </select>
            </div>
            <div className="border border-gray-200  text-gray-500 text-xl w-[120px] h-[40px] p-2">
                <select
                    className="w-[120px]"
                    name="MONTH"
                    value={month}
                    onChange={e => handleSet(e.target.value, 'month')}
                >
                    {selectMonths}
                </select>
            </div>
            <div className="border border-gray-200  text-gray-500 text-xl w-[80px] h-[40px] p-2">
                <select
                    name="YEAR"
                    value={year}
                    onChange={e => handleSet(e.target.value, 'year')}
                >
                    {selectYears}
                </select>
            </div>
        </div>
    );
};

export default DateOfBirth;
