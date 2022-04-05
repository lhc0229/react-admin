import { format_query } from "@/utils/routesDealWith";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate()
navigate(format_query({pathname:'login',query:{id:1,test:21213}}))
