
// API used for this:
// using https://dog.ceo/dog-api/


const fetchAPI = async () => {
 const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  return data
}


export default fetchAPI
