// import style
import style from "../Main.module.css";

export default function ListCard({ item }) {
    const { id, title, key, role, year, tasks, image, link } = item
    console.log('questo è tasks', image)


    return (
        <div className="row py-3 ">
            {/* col with logo */}
            <div className="col-3 col-md-2 p-0 ">
                <div className={style.box_logo}>
                    <img src={image} alt="" />
                </div>
            </div>
            {/* col with text */}
            <div className="col-9 col-md-10 ">

                <div>

                    <p className={style.year}>{year}</p>

                    <div className={style.box_list_title}>
                        <h5>{title}</h5>
                        {link ?
                            <button> link</button>
                            :
                            null
                        }
                    </div>

                    <div className={`accordion ${style.custom_accordion}`} >
                        <h6>
                            <button
                                className={`accordion-button ${style.custom_accordion} collapsed`} type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${key}${id}`}
                                aria-expanded="false"
                                aria-controls={`${key}${id}`}
                            >
                                {role}
                            </button>
                        </h6>
                        <div id={`${key}${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {Array.isArray(tasks) ?
                                    <ul className={style.tasks}>
                                        {tasks.map(text => {
                                            return (
                                                <li key={id}>{text}</li>
                                            )
                                        }
                                        )}
                                    </ul>
                                    :
                                    <p>{item.tasks}</p>
                                }
                                {link ?
                                    <p>{link}</p>
                                    :
                                    null}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}                   
