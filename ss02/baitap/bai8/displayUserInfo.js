export const displayUserInfo = (user) => {
  const {
    name,
    age,
    location: { city, country },
    contact = { email: "unknown", phone: "unknown" },
    job = { title: "unknown", company: "unknown" }
  } = user;

  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${job.title} at ${job.company}, 
            and can be contacted via ${contact.email} or ${contact.phone}.`;
};
