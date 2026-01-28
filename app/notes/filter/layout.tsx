type NotesLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

function NotesLayout({ children, sidebar }: NotesLayoutProps) {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
}

export default NotesLayout;
