import * as yup from "yup";
export default yup.object().shape({
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "Please Select Your Size"),
  sauce: yup
    .string()
    .oneOf(["original red", "bba sauce"], "Please Select a Sauce"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  pineapple: yup.boolean(),
  specialInstructions: yup.string(),
});
