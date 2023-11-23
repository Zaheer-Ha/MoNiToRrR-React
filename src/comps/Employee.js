function Emp(props) {


return  (
<>

      <div className="Hola">
          <h3>
            HoLa, {props.name}!
          </h3>
          {props.role ? <p class="null">{props.role}</p>: <p class="null">Associate</p>}
          
      </div>

</>
)}



export default Emp;
