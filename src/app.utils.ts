const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const PASSWORD_RULE_MESSAGE = 'password should hav e 1 upper case,lowercase letter along with a number and special character'

 export const REGEX ={
    PASSWORD_RULE
 }

 export const MESSAGES = {
    PASSWORD_RULE_MESSAGE
 }
