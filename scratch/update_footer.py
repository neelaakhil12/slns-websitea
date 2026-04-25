import os
import re

new_footer_content = """<h3 class="text-white font-bold mb-4 text-sm uppercase tracking-widest">Panjagutta Branch</h3>
          <ul class="space-y-3 text-sm text-slate-400 mb-8">
            <li><a href="tel:+919100061092" class="hover:text-white transition flex items-center gap-2"><span class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span> +91 91000 61092</a></li>
            <li><a href="mailto:infoslns999@gmail.com" class="hover:text-white transition flex items-center gap-2"><span class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span> infoslns999@gmail.com</a></li>
            <li class="flex items-start gap-2 leading-relaxed"><span class="text-accent mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span> # Unit No. 1, 5th Floor, Deccan Chambers, Panjagutta, Hyderabad - 500082</li>
          </ul>

          <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-widest">Vijayawada Branch</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><a href="tel:+917893528960" class="hover:text-white transition flex items-center gap-2"><span class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span> +91 78935 28960</a></li>
            <li><a href="mailto:info@slnsservices.com" class="hover:text-white transition flex items-center gap-2"><span class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span> info@slnsservices.com</a></li>
            <li><a href="https://www.slnsservices.com" target="_blank" class="hover:text-white transition flex items-center gap-2"><span class="text-accent"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></span> www.slnsservices.com</a></li>
            <li class="flex items-start gap-2 leading-relaxed"><span class="text-accent mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span> # Vasavi Pharma Complex Shop no, 227 Vijayawada-521225</li>
          </ul>
          <div class="mt-8 pt-4 border-t border-white/5 flex gap-4 text-xs">
            <a href="faq.html" class="hover:text-accent transition">FAQ</a> | <a href="terms.html" class="hover:text-accent transition">Terms & Conditions</a>
          </div>"""

# Regex pattern to match the contact information block in footer
# It matches from <h3 ...>Contact Information</h3> to </ul>
pattern = re.compile(r'<h3 class="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Information</h3>.*?</ul>', re.DOTALL)

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "Contact Information" in content:
        new_content = pattern.sub(new_footer_content, content)
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
        else:
            print(f"No match found in: {filepath}")
    else:
        print(f"Skipping: {filepath} (No 'Contact Information' found)")

def main():
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.html'):
                update_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
