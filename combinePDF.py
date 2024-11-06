import PyPDF2

def combine_pdfs(pdf_file1, pdf_file2, output_pdf):
    merger = PyPDF2.PdfMerger()  # Use PdfMerger instead of PdfFileMerger
    merger.append(pdf_file1)
    merger.append(pdf_file2)
    merger.write(output_pdf)
    merger.close()

# # Specify the paths of the input PDF files
# pdf_file1 = 'index.pdf'
# pdf_file2 = 'index2.pdf'

# # Specify the output file path for the merged PDF
# output_pdf = 'combined.pdf'

# # Call the function to combine the PDF files
# combine_pdfs(pdf_file1, pdf_file2, output_pdf)