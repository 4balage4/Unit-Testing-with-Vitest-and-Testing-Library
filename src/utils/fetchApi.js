
// API used for this:
// using https://dog.ceo/dog-api/


const fetchAPI = async () => {

 try {
   const response = await fetch('https://dog.ceo/api/breeds/image/random')

   // handle http errors
   if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
   }

  return await response.json()

 } catch (error) {
    console.error('error fetching: ', error)
    throw error
 }

}


export default fetchAPI
