function Modal({ children }) {
  console.log(children);
  return (
    <div className="modal-backdrop">
      <section className="modal">{children}</section>
    </div>
  );
}
export default Modal;
