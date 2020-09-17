const Dashboard = ({ name, bio, blog }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{`Bio: ${bio}`}</p>
            <p>{`Blog: ${blog}`}</p>
        </div>
    )
}

Dashboard.getInitialProps = async () => {
    const res = await fetch(`https://api.github.com/users/eren23`);
    const user = res.json();

    return user;
}

export default Dashboard