import * as Yup from 'yup'

export const RegisterValidation = Yup.object({
    fullname: Yup.string().min(3).required("Please enter full name"),
    email: Yup.string().email("Please enter valid email").required("Please enter email"),
    password: Yup.string().min(7).required("Please enter password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Password did not matched")
})