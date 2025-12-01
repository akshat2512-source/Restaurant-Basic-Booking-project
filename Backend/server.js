import app from "./app.js";

app.listen(process.env.PORT ,()=>{// to access env variable we use process.env.whatever
    console.log(`Server Running On Port : ${process.env.PORT}`);
});
