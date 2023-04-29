import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home({ lessons }) {

  const session = useSession()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    session
    console.log(session);
  }, [isLoggedIn]);
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`} passHref={true} legacyBehavior={true}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");

  return {
    props: {
      lessons,
    },
  };
};
