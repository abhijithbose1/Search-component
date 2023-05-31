import "./SearchList.css";

export const SearchList = ({ searchList }) => {
    return (
        <div className="searchlist-main-container">
            {searchList.map((data) => (
                <div className="searchlist-content-container" key={data.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                    <p className="title">{data.title}</p>
                </div>
            ))}
        </div>
    );
};
