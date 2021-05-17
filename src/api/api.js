import axios from "axios";

let TOKEN =
  "eyJraWQiOiI1WEhDQWNOWDV6NGhTUVwvRk9uUkVYMUt0ZWpwam9mcFkyTWM2aHltM1NlYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxYjFmNDIyOS00YTYwLTRhYzQtOGE1Ny0zZDEyYjljYTMxYWQiLCJjb2duaXRvOmdyb3VwcyI6WyJzdXBlckFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzdlQnJ4WklrVyIsImlzU3VwZXJBZG1pbiI6InRydWUiLCJjb2duaXRvOnVzZXJuYW1lIjoiMWIxZjQyMjktNGE2MC00YWM0LThhNTctM2QxMmI5Y2EzMWFkIiwiaXNBZG1pbiI6InRydWUiLCJhdWQiOiI2bXVvNDhqYzM0NjJjb2E4NTBjdGxuYzhrNyIsImV2ZW50X2lkIjoiNjQxMjE0MzktNmNkNC00M2ZkLTk0MDUtMzA5ZDQyYTJmNDNjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTkwMTEyNDcsImV4cCI6MTYxOTAxNDg0NywiaWF0IjoxNjE5MDExMjQ3LCJlbWFpbCI6InNoc29uYXdhbmVAbWVya2xlaW5jLmNvbSJ9.Sjo1Fwya9UgOHDN_VhCx8mZOhHK8xBHBMJdT3VD-AJM0USuos96LZggucUfUHowTjOYn0bIrdbJHZ4jKNeR7CwbYM61rbn4IsdRBQzf88zEeBMmP_tG1u1CS0dW6VP3ErigR5V6ZMIYwUuFg_MwQYMxrCD7vVcrMck_49ixm7Di1e5BgW8wnVNW2VFwvqy31a_Iin3fBNzgZ66HWpUiDwtj9kRzvyGLjE7NRijb4GrFHo5zWUh_DGfeXzeQkvM6KWwoFcBl5d5bGXnmMa-zV_60HLE8QHCu_tqyuEf9h9DAYyBDc0x9k9fpfvqtN1NLDTubbkCCJkn7HNQ6d-jP10w";


export const apiresquests = async (urlAppend, method, data) => {
  
  const headers = {
    Authorization: `${TOKEN}`,
  };

  const req = axios.create({
    baseURL: "https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/",
    headers: headers,
  });

  console.log(data);
  switch (method) {
     
    case "POST":
      return await req({ method: method, url: urlAppend,data:data})
  }
};
