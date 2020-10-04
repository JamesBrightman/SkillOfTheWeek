export const fetchUser = async (name) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://oldschool.tools/ajax/hiscore-stats/${name}`);
    return res.json(); //gets the data - returns a promise
};