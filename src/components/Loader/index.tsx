import style from "./index.module.scss";

export const Loader = () => {
  return (
    <div className={style.layout}>
      <div className={style.terminalLoader}>
        <div className={style.terminalHeader}>
          <div className={style.terminalTitle}>Status</div>

          <div className={style.terminalControls}>
            <div className={style.close}></div>

            <div className={style.minimize}></div>

            <div className={style.maximize}></div>
          </div>
        </div>

        <p className={style.text}>
          Loading <span className={style.typing}>...</span>
        </p>
      </div>
    </div>
  );
};
