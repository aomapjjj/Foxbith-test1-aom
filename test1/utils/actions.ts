
export const createUser = (prevState: any, formData: FormData) => {
    // await new Promise((resolve) => setInterval(resolve, 1000));
    const rawData = Object.fromEntries(formData);
    console.log(rawData)
    return rawData
};

