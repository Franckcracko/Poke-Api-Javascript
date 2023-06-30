export async function fetching (url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Ocurrio un error");
    } 
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error;
  }
}