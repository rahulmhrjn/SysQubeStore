import * as Yup from 'yup'

export const LoginValidation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email address is required"),
    password: Yup.string().min(7).required("Password is required"),
})