import useTheme from "../contexts/theme";

export default function ThemeBtn() {
    // ab yaha pe ham custom hook ka use akrnege useTheme aur usme se lightmode darkmode and themmode ka access lenge

    const {themeMode, darkTheme, lightTheme} = useTheme()
    // now we mae the method of what happen when onchangebtn do 
    const onChangeBtn = (event)=>{
        // and we make a variable that store the current status of the checked in input tag 
        const darkModeStatus = event.currentTarget.checked

        if(darkModeStatus) darkTheme()
        else lightTheme()
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                // here we write the method od onchange 
                onChange={onChangeBtn}
                // and ager ye chaeck raha matlab uspe ham click kiye toh kya hoga tememode kya ho jayega
                checked={themeMode === 'dark'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

