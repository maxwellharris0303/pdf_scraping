import pdfkit
import combinePDF

# directly from url
def convert_run():
    pdfkit.from_file("webpage.html", "first.pdf", verbose=True, options={"enable-local-file-access": True})
    print("="*50)
       
    combinePDF.combine_pdfs("result.pdf", "first.pdf", "result.pdf")
