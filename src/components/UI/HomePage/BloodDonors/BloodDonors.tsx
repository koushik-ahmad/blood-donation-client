const BloodDonors = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/donor-list`);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>Blood donors</h1>
    </div>
  );
};

export default BloodDonors;
