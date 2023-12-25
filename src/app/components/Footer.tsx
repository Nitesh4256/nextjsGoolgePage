const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full bg-neutral-100">
      <p className="py-3 px-8 text-sm text-slate-600">India</p>
      <div className="flex">
        <ul className="flex py-3 px-8 [&>*]:mr-6 text-sm text-slate-600">
          <li>About</li>
          <li>Adversising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>
        <ul className="flex py-3 px-8 ml-auto [&>*]:mr-6 text-sm text-slate-600">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
