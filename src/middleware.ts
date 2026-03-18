import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Bescherm alle /portaal routes behalve /portaal/login
  if (pathname.startsWith("/portaal") && pathname !== "/portaal/login") {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/portaal/login";
      return NextResponse.redirect(url);
    }
  }

  // Ingelogde gebruiker op loginpagina → doorsturen naar portaal
  if (pathname === "/portaal/login" && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/portaal";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/portaal/:path*"],
};
