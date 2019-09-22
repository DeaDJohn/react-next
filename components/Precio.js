const Precio = (props) => {

    const {price, percent_change_24h, percent_change_7d, percent_change_1h} = props.precio;

    return ( 
        <div className="card text-white bg-success mg-3">
            <div className="card-body">
                <h4 className="card-title">
                    Precio Actual : $ {price}
                </h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text"><span className="font-wight-bold">
                        Última hora: 
                        </span>
                        {percent_change_1h} %
                    </p>
                    <p className="card-text"><span className="font-wight-bold">
                        Últimas 24h: 
                        </span>
                        {percent_change_24h} %
                    </p>
                    <p className="card-text"><span className="font-wight-bold">
                        Últimos 7d: 
                        </span>
                        {percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Precio;